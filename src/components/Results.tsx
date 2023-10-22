type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}    

const Results = (props: ResultsPropsType) => { 
    return ( 
        <div>
            {props.results.country && <p>{props.results.country}</p>}

        </div>

    ); 
};

export default Results;
