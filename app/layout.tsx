import './index.css'

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{paddingLeft: '6rem'}}>
        <header className="text-[4rem] h-60 bg-white flex relative">
          <h1 className="left-[4rem] bottom-[2rem] absolute"><a href='./'>kayo tei</a></h1>
        </header>
        <div className="bg-gray-200">
          {props.children}
          {props.modal}
        </div>
      </body>
    </html>
  )
}
