const Manager = require( "../lib/Manager" );

test( "Setting manager's office number.", () => {
    const testOfficeNumber = 888;
    const manager = new Manager( "Borel", 38472, "landry.anicet@yahoo.fr", testOfficeNumber );
 
    expect( manager.officeNumber ).toBe( testOfficeNumber );
 });
 
 test( "Use getRole() to return \"Manager\" as role.", () => {
    const testRole = "Manager";
    const manager = new Manager( "Borel", 38472, "landry.anicet@yahoo.fr", 888 );
 
    expect( manager.getRole()).toBe( testRole );
 });