const heading=React.createElement(
    "h1",
    { id: "heading1", name:"react_object" },
    "Hello World from React!"
    ); // here heading is an object(react object) not an html element

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);// here the functionality of render is to take that html object and create that respective object and insert into root(DOM)


/*
CREATING NESTED DIVS IN REACT LIKE
<div id="parent">
        <div id="child">
            <h1>I am an heading</h1>
        </div>
</div>
*/
const parent=React.createElement("div",{ id :"parent"},
    React.createElement("div", { id:"child"},
        React.createElement("h1",{},"I am an h1 tag")
    )
);//here parent is not a html tag but it is a React element
root.render(parent);

// to make multiple siblings inside a tage make 3rd elemnt as array of objects in react
const parent_new=React.createElement("div",{ id :"parent"},[
    React.createElement("div",{ id:"child1"},[
            React.createElement("h1",{},"I am an h1 tag"),
            React.createElement("h3",{},"I am an h3 tag sibling of h1")
        ]),
    React.createElement("div",{ id:"child2"},[
            React.createElement("h1",{},"I am an h12 tag"),
            React.createElement("h3",{},"I am an h32 tag sibling of h1")
        ])]

);
root.render(parent_new);// this root .render statement oveerides all the content of the root with parent tag/object

// here creating nested elements in react seems to be complicated than HTML so for this we have JSX to simplify our life so above is the  core react but in reallity we never use core react we use JSX
