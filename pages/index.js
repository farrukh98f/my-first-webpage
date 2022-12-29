import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className="text-3xl text-green-500 bg-red-500">My first web page</h1>
      <p>Author: Fayzullaev.F</p>
      <p></p>
    </Layout>
  )
}
