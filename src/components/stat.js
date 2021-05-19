const Stat = ({stats}) => {
  return ( 
    <div className="each-stat">
     
        {stats.map((each) => (
           <div className="col-md-4 col-sm-4 col-xs-12">
					<span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className={each.cl}></i></span>
					<p className="stat_count">{each.count}</p>
					<h3>{each.content}</h3>
          </div>
        ))}
				</div>
    
   );
}
 
export default Stat;