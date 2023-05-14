import {
    collection, CollectionReference, DocumentData, onSnapshot, Query, query
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../firbase';

interface Channal {
  id: string;
  channel: DocumentData;
}
const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channal[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));
  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channal[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default useCollection;
