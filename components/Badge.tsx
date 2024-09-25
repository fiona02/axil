import CountUp from 'react-countup'

interface BadgeProps {
  containerStyles: string;
  endCountNum:number;
  endCountText:string;
}


const Badge = ({ 
  containerStyles, 
  endCountNum, 
  endCountText }:BadgeProps) => {

    return (
      <div>
        <div>
          <div>
            <CountUp end={endCountNum} delay={1} duration={4}/>
            {endCountText}
          </div>
        </div>
      </div>
    )

}

export default Badge