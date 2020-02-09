({
    handleNext : function(component, event, helper) {
        alert('I am in Next');
        var details = event.getParam("testmsgN");
        console.log('Details ', details);

    },

    handlePrev : function(component, event, helper) {
        alert('I am in Previous');
        var details = event.getParam("testmsgP");
        console.log('Details ', details);
    }
})