import Head from "next/head"
import type { FC, ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({title='T3 Stack', children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        {children}
      </main>
    </>
  )
}