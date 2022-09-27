import Express from 'express';
import Multer from 'multer';

export class FileUploadServer {
  constructor(port, path) {
    this.__uploadedFiles = [];
    this.__failUploads = false;
    this.__haltUploads = false;
    const upload = new Multer({ storage: Multer.memoryStorage() });
    this.express = new Express();
    this.express.use((request, response, next) => {
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
      next();
    });
    this.express.post(path, upload.array('files'), (request, response) => {
      this.__uploadedFiles = this.__uploadedFiles.concat(request.files.map((f) => f.originalname));
      if (this.__haltUploads) {
        response.status(200);
        response.write('Halting ...');
      } else {
        response
          .status(this.__failUploads ? 500 : 200)
          .send(this.__failUploads ? 'Uw bestand kon niet verwerkt worden' : 'OK');
      }
    });
    this.port = port;
  }

  start() {
    return new Promise((resolve) => {
      this.server = this.express.listen(this.port, resolve);
    });
  }

  stop() {
    this.server.close();
  }

  haltUploads() {
    this.__haltUploads = true;
  }

  failUploads() {
    this.__failUploads = true;
  }

  get uploadedFiles() {
    return this.__uploadedFiles;
  }

  reset() {
    this.__failUploads = false;
    this.__haltUploads = false;
    this.__uploadedFiles = [];
  }
}
