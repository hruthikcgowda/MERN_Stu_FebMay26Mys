const items = {
    item1:"Laptop",
    item2:"server",
    item3:"cloudAPI"
};

for(const [item,itemname] of Object.entries(items)){
    console.log(`${item}:${itemname}`);
}
