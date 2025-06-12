import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Conviva OTT Tracker", layout="centered")
st.title("🎥 Conviva OTT App with DPI + AppTracker")

with open("index.html", "r") as f:
    html_content = f.read()

components.html(html_content, height=640, scrolling=True)
