import * as functions from 'firebase-functions';
import { EventContext } from 'firebase-functions';
import { Type1 } from '@myorg/common';
import * as admin from 'firebase-admin';
import DocumentSnapshot = FirebaseFirestore.DocumentSnapshot;

admin.initializeApp();

exports.docs = {
  create: functions
    .runWith({ timeoutSeconds: 60, memory: '256MB' })
    .firestore.document('/docs/{docId}')
    .onCreate((snapshot: DocumentSnapshot, context: EventContext) => {
      console.log(Type1.CONSTANT_1)
      return true;
    })
};
