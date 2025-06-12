import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Conviva OTT Test", layout="centered")

st.title("🎬 Conviva OTT Video Demo")

# Load and render the local HTML file
with open("index.html", "r") as f:
    html_content = f.read()

components.html(html_content, height=600, scrolling=True)
