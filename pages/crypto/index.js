import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function Crypto() {
  return (
    <Layout title="Crypto">
      <h1 className="mb-4 text-2xl text-center">
        Crypto Test (암호 알고리즘 테스트)
      </h1>
      <div className="mx-auto max-w-screen-sm ">
        <div className="button-link">
          <Link href="crypto/hash" className="text-lg">
            Hash Function - 해시함수
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/hmac" className="text-lg">
            Message Authentication Code (HMAC) - 메시지인증코드
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/pbkdf2" className="text-lg">
            Password-based Key Derivation Function - 패스워드 기반 키생성
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/passwordHash" className="text-lg">
            Password Hash Salting - 패스워드해시
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/aes" className="text-xl">
            AES encryption - 대칭키 암호
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/rsaenc" className=" text-xl">
            RSA encryption - 공개키 암호
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/rsasig" className=" text-xl">
            RSA signature - 전자서명
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/jwt" className=" text-xl">
            JSON Web Token (JWT)
          </Link>
        </div>

        <div className="button-link">
          <Link href="crypto/cert" className=" text-xl">
            Certificate - 인증서
          </Link>
        </div>
      </div>
    </Layout>
  )
}
