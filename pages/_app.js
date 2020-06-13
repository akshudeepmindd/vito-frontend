import { Provider } from "react-redux";
import App, {AppInitialProps, AppContext} from "next/app";
import Head from "next/head"
import {wrapper} from "../redux/store";
import { CookiesProvider } from "react-cookie";

  class MyApp extends App {
    static getInitialProps = async ({Component, ctx}) => {

      ctx.store.dispatch({type: 'TOE', payload: 'was set in _app'});

      return {
          pageProps: {
              // Call page-level getInitialProps
              ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
              // Some custom thing for all pages
              pathname: ctx.pathname,
          },
      };

  };

    render() {
      const {Component, pageProps} = this.props;

        
      return (
          <CookiesProvider>
            <Component {...pageProps} />
            
          </CookiesProvider>
       
      );
    }
  }

export default wrapper.withRedux(MyApp)