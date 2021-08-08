const StatelessInput = ({ errorMessage, ...props }) => (
    <div>
          <input
            {...props}
            
          ></input>
          <span style={{color: 'red'}}>
          {errorMessage}
          </span>
    </div>
)

export default StatelessInput;