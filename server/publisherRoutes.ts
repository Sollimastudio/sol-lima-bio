import express from "express";
import { renderArtifactDocxBuffer } from "../src/core/publisher/docxRenderer";

export const publisherRouter = express.Router();

function safeFileName(value: string) {
  return (value || "publisher-project")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "publisher-project";
}

publisherRouter.post("/docx", async (req, res) => {
  try {
    const artifact = req.body?.artifact;

    if (!artifact) {
      return res.status(400).json({ ok: false, error: "artifact_required" });
    }

    const buffer = await renderArtifactDocxBuffer(artifact);
    const fileName = `${safeFileName(artifact.title)}-editavel.docx`;

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    return res.send(buffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: "docx_export_failed" });
  }
});
