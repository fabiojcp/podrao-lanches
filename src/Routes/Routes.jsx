import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

export default function RoutesMap () {
  return (
    <>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
    </>
  );
}
