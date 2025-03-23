'use client'

import styles from "./page.module.css";
// import { db } from "../configs/firebase";
import { fileStorage } from "../configs/firebase";
// import { collection } from "firebase/firestore";
// import { getDocs, collection } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Home() {
  // const [tries, setTrie] = useState([]);
  

  // const triesCollectionRef = collection(db, "tries")
  const [fileURLs, setFileURLs] = useState<string[]>([]);
  const fileRef = ref(fileStorage, "")

  useEffect(() => {
    
    
    /*
    const getTries = async () => {
      try {
        const data = await getDocs(triesCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      } 
    }
    */

    const getFiles = async () => {
      try {
        const data = await listAll(fileRef)
        data.items.map((file) => {
          getDownloadURL(file).then((url: string) => {
            setFileURLs([...fileURLs,url])
          })
        })
      } catch (err) {
        console.error(err);
      } 
    }
    
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
      <main className={styles.main}>
        {fileURLs.length > 0 && 
          <video className={styles.video} autoPlay loop>
            <source src={fileURLs[0]} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        }
      </main>
  );
}
