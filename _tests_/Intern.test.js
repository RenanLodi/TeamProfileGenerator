const Intern = require('../lib/Intern');

est( "Set intern school.", () => {
    const testSchool = "University Of Miami";
    const intern = new Intern( "Borel", 38495, "landry.anicet@yahoo.fr", testSchool );
 
    expect( intern.school ).toBe( testSchool );
 });

test( "Set school using getSchool().", () => {
    const testSchool = "University Of Miami";
    const intern = new Intern( "Borel", 38494, "landry.anicet@yahoo.fr", testSchool );
 
    expect( intern.getSchool()).toBe( testSchool );
 });

 test( "Use getRole() to return \"Intern\" as role.", () => {
    const testRole = "Intern";
    const intern = new Intern( "Borel", 20803, "landry.anicet@yahoo.fr", "University Of Miami" );
 
    expect( intern.getRole()).toBe( testRole );
 });