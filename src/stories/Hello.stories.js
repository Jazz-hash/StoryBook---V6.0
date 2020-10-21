import React from "react";
import Hello, { IsLoading } from "../components/Hello.js";

export default {
  title: "Hello Story",
  component: Hello,
};

export function NotLoading() {
  return <IsLoading loading={false} />;
}

export function Loading() {
  return <IsLoading loading={true} />;
}

export function HelloJoe() {
  return <Hello name="Jo Doe" />;
}

export function TestUser() {
  return <Hello name="Test User" />;
}
