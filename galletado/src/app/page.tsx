'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { db } from "../configs/firebase";
import { fileStorage } from "../configs/firebase";
import { getDocs, collection } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Home() {
  const [tries, setTrie] = useState([]);
  const [fileURL, setFileURL] = useState("/next.svg");

  const triesCollectionRef = collection(db, "tries")
  const fileRef = ref(fileStorage, "")

  useEffect(() => {
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


    const getFiles = async () => {
      try {
        const data = await listAll(fileRef)
        data.items.map((file) => {
          getDownloadURL(file).then((url) => {
            setFileURL(url);
            console.log(url);
          })
        })
      } catch (err) {
        console.error(err);
      } 
    }

    getTries();
    getFiles();
  }, [])
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={fileURL}
          alt="Next.js logo"
          fill={true}
          priority
        />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
