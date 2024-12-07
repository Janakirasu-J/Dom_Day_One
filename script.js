let headind_One = document.createElement("H1");
let headind_two = document.createElement("H1");
let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li_one = document.createElement("li");
let li_two = document.createElement("li");
let li_three = document.createElement("li");
let section = document.createElement("section");
let main = document.createElement("main");

headind_One.innerHTML = "Create Element Task ";
headind_two.innerHTML = "Above Detalits Are Creating Dom ";
li_one.innerHTML = "JANAKIRASU J";
li_two.innerHTML = "29";
li_three.innerHTML = "Kanchipuram";

headind_One.setAttribute("class", "head");
headind_two.setAttribute("class", "head");
li_one.setAttribute("class", "list");
li_two.setAttribute("class", "list");
li_three.setAttribute("class", "list");

ul.append(li_one, li_two, li_three);
nav.appendChild(ul);
header.appendChild(nav);

section.append(headind_two);
main.appendChild(section);

document.body.append(headind_One);
document.body.append(header);
document.body.append(main);
document.body.append(headind_One, header, main);

function dynamic(tagname, conted, attname, attvalue) {
  const element = document.createElement(tagname);
  element.innerHTML = conted;
  element.setAttribute(attname, attvalue);
  return element;
}
const heding_one_1 = dynamic("h1", "hello World", "class", "heding");
const heding_two = dynamic("h1", "hello World", "class", "heding");
const list_1 = dynamic("li", "Janakirasu", "class", "list");
const list_2 = dynamic("li", "29", "class", "list");
const list_3 = dynamic("li", "Kanchipuram", "class", "list");
const ul_list = dynamic("ul", "", "class", "list_ul");
const nav_bar = dynamic("nav", "", "class", "navlist");
const heading = dynamic("header", "", "class", "header");
const section_1 = dynamic("section", "", "class", "list");
const main_1 = dynamic("main", "", "class", "list");

ul_list.append(list_1,list_2,list_3);
nav_bar.appendChild(ul_list)
heading.appendChild(nav_bar)

section_1.appendChild(heding_two)
main_1.appendChild(section_1)


document.body.append(heding_one_1,main_1,heading)
