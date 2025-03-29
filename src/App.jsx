import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Array from './components/ArrayPage/index';
import LinkedList from "./components/LinkedList/index";
import Searching from "./components/Searching/index";
import Sorting from "./components/Sorting/index";
import Recursion from "./components/Recursion/index";
import Backtracking from "./components/Backtracking/index";
import Greedy from "./components/Greedy/index";
import Dynamic from "./components/Dynamic/index";
import Pattern from "./components/Pattern/index";
import Divide from "./components/Divide/index";
import Branch from "./components/Branch/index";
import Random from "./components/Random/index";
import StringComponent from "./components/Strings/index";
import StackComponent from "./components/Stack/index";
import HashComponent from "./components/Hash/index";
import HeapComponent from "./components/Heap/index";
import QueueComponent from "./components/Queue/index";
import TreeComponent from "./components/Tree/index";
import GraphComponent from "./components/Graph/index";
import MatrixComponent from "./components/Matrix/index";

const App = () => {
  return (
    <Router basename="/Master-DSA-Learning-Platform">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/recursion" element={<Recursion />} />
        <Route path="/backtracking" element={<Backtracking />} />
        <Route path="/greedy" element={<Greedy />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/pattern" element={<Pattern />} />
        <Route path="/divide" element={<Divide />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/random" element={<Random />} />
        <Route path="/string" element={<StringComponent />} />
        <Route path="/stack" element={<StackComponent />} />
        <Route path="/hash" element={<HashComponent />} />
        <Route path="/heap" element={<HeapComponent />} />
        <Route path="/queue" element={<QueueComponent />} />
        <Route path="/tree" element={<TreeComponent />} />
        <Route path="/graph" element={<GraphComponent />} />
        <Route path="/matrix" element={<MatrixComponent />} />
      </Routes>
    </Router>
  );
};

export default App;