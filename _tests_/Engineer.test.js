const Engineer = require( "../lib/Engineer" );

test( "Set engineer's Github username.", () => {
    const testGithutUsername = "RenanLodi";
    const engineer = new Engineer( "Borel", 38475, "landry.anicet@yahoo.fr", testGithutUsername );
 
    expect( engineer.githubUsername ).toBe( testGithutUsername );
 });

 test( "Get Github account using getGithub().", () => {
    const testGithubUsername = "RenanLodi";
    const engineer = new Engineer( "Borel", 39482, "landry.anicet@yahoo.fr", testGithubUsername );
 
    expect( engineer.getGithubUsername()).toBe( testGithubUsername );
 });

 test( "Use getRole() to return \"Engineer\" as role.", () => {
    const testRole = "Engineer";
    const engineer = new Engineer( "Borel", 38472, "landry.anicet@yahoo.fr" );
 
    expect( engineer.getRole()).toBe( testRole );
 });