import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import Layout from '../components/Layout.js';
import instance from "../instance";
import web3 from "../web3";
import { Link } from "../routes";

const App = () => {

  return (
    <>
      <Layout>
        <Link route="analytics"><a><Button>Analytics</Button></a></Link>
        <Link route="/lockers/new"><a><Button>Add New</Button></a></Link>
      </Layout>
    </>
  )
}

export default App;
