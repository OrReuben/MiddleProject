import "./infintyText.css"

export default function InfintyText() {
    return(
        <div className="marquee">
      <h3>
        <div className="marquee-wrapper">
          <div className="marquee-title">
            / We think <span className="text-stroke-black"> creative </span>
            &amp; make dreams come
            <span className="text-stroke-black"> true</span> / We think
            <span className="text-stroke-black"> creative </span>
            &amp; make dreams come
            <span className="text-stroke-black"> true</span>
          </div>
          <div className="marquee-title">
            / We think <span className="text-stroke-black"> creative </span>
            &amp; make dreams come 
            <span className="text-stroke-black"> true</span> / We think
            <span className="text-stroke-black"> creative </span>
            &amp; make dreams come 
            <span className="text-stroke-black"> true</span>
          </div>
        </div>
      </h3>
    </div>

    )
};
