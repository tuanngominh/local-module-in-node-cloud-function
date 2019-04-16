"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const common_1 = require("@myorg/common");
const admin = require("firebase-admin");
admin.initializeApp();
exports.docs = {
    create: functions
        .runWith({ timeoutSeconds: 60, memory: '256MB' })
        .firestore.document('/docs/{docId}')
        .onCreate((snapshot, context) => {
        console.log(common_1.Type1.CONSTANT_1);
        return true;
    })
};
