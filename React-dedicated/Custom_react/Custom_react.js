

function add(Reactelement, container){
    const Domelemnet = document.createElement(Reactelement.type)
    Domelemnet.innerHTML = Reactelement.children
    Domelemnet.setAttribute('href',Reactelement.props.href)
    Domelemnet.setAttribute('target', Reactelement.props.target)
    container.appendChild(Domelemnet);
  
    
}

const Reactelement = {
    type: "a",
    props: {
        href: "www.facebook.com",
        target: "_black"
    },
    children: "Click here to goto facebook",


}

const container = document.querySelector("#root");
add(Reactelement, container);
