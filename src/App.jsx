import { useEffect, useMemo, useState } from 'react'
import FAQComponent from "react-faq-component-semantic-html"
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [code, setCode] = useState('')
  const [faqData]=useState([
    {
      title: "Why This Price?",
      paragraph:
        'Because we buy the products together with other users, we can offer an affordable price for people who want to try the software.  " **Please note that we are under no obligation to provide personalized assistance", But we do everything possible so that the installation / start-up process of the product is successful.',
      colors: {
        title: "red",
        paragraph: "white"
      }
    },
    {
      title: "How many devices are available to use?",
      paragraph: "As many as you want, we do not limit the devices to use."
    },
    {
      title: "Don't receive product after payment?",
      paragraph:
        "Our delivery system is semi-automatic, sometimes the delivery take more time was expected.",
      colors: {
        title: "#f09",
        paragraph: "#00ff51"
      }
    }
  ])
  const memoData = useMemo(()=>{
    return [
    {
      title: "Why This Price?",
      paragraph:
        'Because we buy the products together with other users, we can offer an affordable price for people who want to try the software.  " **Please note that we are under no obligation to provide personalized assistance", But we do everything possible so that the installation / start-up process of the product is successful.',
      colors: {
        title: "red",
        paragraph: "white"
      }
    },
    {
      title: "How many devices are available to use?",
      paragraph: "As many as you want, we do not limit the devices to use."
    },
    {
      title: "Don't receive product after payment?",
      paragraph:
        "Our delivery system is semi-automatic, sometimes the delivery take more time was expected.",
      colors: {
        title: "#f09",
        paragraph: "#09f"
      }
    }
  ]
  },[])
  
  const theme = {
    background: `#09f`,
    color: `#red`,
    borderBottom: `.1px solid #fff`
  };

 useEffect(()=>{
  function print_r(object,html){
    if(html) return '<pre>' +  JSON.stringify(object, null, 4) + '</pre>';
    else return JSON.stringify(object, null, 4);
  }  

  var hlt = hljs.highlight('javascript',print_r(memoData));
  setCode(hlt.value)
 },[memoData])

  return (
    <>
    <div className='faq-container'>
      <h1>React FAQ Component Semantic HTML</h1>
      <FAQComponent
        data={faqData}
        theme="netflix"
        customTheme={theme}
        schemaName="FAQ Page"
      />
    </div>
    <div className='faq-container'>
      <h2>Data used in this example</h2>
      <pre>
        <code className='language-json' dangerouslySetInnerHTML={{
          __html: code
        }}>
        </code>
      </pre>
    </div>
    <h2>Maded with Vite + React</h2>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
