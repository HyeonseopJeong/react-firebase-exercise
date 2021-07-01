import React, {useState, useEffect} from 'react';
import {firebase, firebaseApp, db} from './firebase'

function App() {
  const [docData, setDocData] = useState('');
  const [colId, setColId] = useState('');
  const [docId, setDocId] = useState('');

  useEffect(() => {}, [])

  const addDoc = async (colId, data) => {
    try {
      await db.collection(colId).add(data);
      console.log('add : good!');
    } catch(e) {
      alert('add : err!');
    }
  }

  const getDoc = async (colId, docId) => {
    try {
      const doc = await db.collection(colId).doc(docId).get()
      if(doc.exists) {
        console.log(doc.data());
        setDocData(JSON.stringify(doc.data()));
      } else {
        console.log('해당 document 없음!');
      }
      console.log('get : good!');
    } catch(e) {
      alert('get : err!');
    }
  }

  const updateDoc = async (colId, docId, data) => {
    try {
      await db.collection(colId).doc(docId).update(data);
      console.log('update : good!');
    } catch(e) {
      alert('update : err!');
    }
  }

  const deleteDoc = async (colId, docId) => {
    try {
      await db.collection(colId).doc(docId).delete();
      console.log('delete document : good!');
    } catch(e) {
      alert('delete document : err!');
    }
  };

  const deleteField = async (colId, docId, fieldName) => {
    try {
      const data = {};
      data[fieldName] = firebase.firestore.FieldValue.delete();
      await db.collection(colId).doc(docId).update(data)
      console.log('delete field : good!')
    } catch(e) {
      alert('delete field : err!');
    }
  }

  const onClickAdd = () => {
    const data = { content : '에드~', other: 'other~' };
    addDoc('chat', data);
  }

  const onClickGet = () => {
    getDoc(colId, docId);
  }

  const onClickUpdate = () => {
    const data = {content: 'updated!'}
    updateDoc('chat','At62v6MD9HGUx4IG2gXK', data);
  }

  const onClickDeleteDoc = () => {
    deleteDoc('chat','At62v6MD9HGUx4IG2gXK');
  }

  const onClickDeleteField = () => {
    deleteField('chat', 'At62v6MD9HGUx4IG2gXK', )
  }

  
  return (
    <div className="App">
      <div>
        <button onClick={onClickGet}>Get</button>
        <button onClick={onClickAdd}>Add</button>
        <button onClick={onClickUpdate}>Update</button>
        <button onClick={onClickDeleteDoc}>Delete document</button>
        <button onClick={onClickDeleteField}>Delete field</button>
      </div>

      컬렉션 ID <input value={colId} onChange={(e)=>setColId(e.target.value)} /> <br />
      도큐먼트 ID <input value={docId} onChange={(e)=>setDocId(e.target.value)} /> <br />
      <div>{docData}</div>
    </div>
  );
}

export default App;
