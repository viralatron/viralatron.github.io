// make this script consume the json and render the json as a skill tree
// still have no clue about how to solve this

async function buildRoadmap(){
    const roadmap = await getRoadmap();
    console.log("still a work in progress, but we're getting there");
    console.log(roadmap);

    //now build this ehehehe
}

async function getRoadmap(){
    const skillTree = await fetch('./skilltree.json');
    
    const data = await skillTree.json();
    
    return data;
}