import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      colors: {
        "pointer-color": "#0E344B",
      },
      backgroundImage: {
        'nav-bar': "linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.5)), url(https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)",
      }
    },
  },
  plugins: [],
});