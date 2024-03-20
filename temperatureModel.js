const model = {
    app: {
        currentPage: 'temperature',
    },
    inputs: {
        temperature: {
            temperature: null,
            date: null,
        },
        graph: {
            fromDate: null,
            toDate: null,
        },
    },
    temperatures: [
        { temperature: 7, date: '2024-03-20' },
        { temperature: 5, date: '2024-03-19' },
        { temperature: 3, date: '2024-03-18' },
    ],
};

/*
  <input 
    type="number"
    oninput="
        model.inputs.temperature.temperature 
        = this.valueAsNumber"
    value="${model.inputs.temperature.temperature}"
*/