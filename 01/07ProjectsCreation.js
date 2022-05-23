function calculateProjectTime(input){
    let name = input[0];
    let numberProjects = Number(input[1]);

    let totalProjectTime = numberProjects * 3;

    console.log(`The architect ${name} will need ${totalProjectTime} hours to complete ${numberProjects} project/s.`);
}