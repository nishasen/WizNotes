import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, AuthProvider, NoteProvider, ArchiveProvider, TrashProvider, FilterProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
          <AuthProvider>
            <NoteProvider>
              <FilterProvider>
                <ArchiveProvider>
                  <TrashProvider>
                    <App />
                  </TrashProvider>
                </ArchiveProvider>
              </FilterProvider>
            </NoteProvider>
          </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
