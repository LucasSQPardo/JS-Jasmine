incorrectlyName = 'who knows the title?'
correctTitle = 'First Jasmine'

it('check the title: ' + incorrectlyName, function() {
    expect(document.title).toBe(incorrectlyName)
})

it('Checking title again: ' + correctTitle, function(){
    expect(document.title).toBe(correctTitle)
})
