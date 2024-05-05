function describeCity(City: string, Country = 'Pakistan'){
    console.log(`${City} is in ${Country}.`);
    
};

describeCity('Karachi');
describeCity('Lahore');
describeCity('Dubai', 'UAE')
