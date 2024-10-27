import React from 'react'
import '../../styles/Badge/index.css';

function Badge({ title, variant="default" }) {
  return (
    <>
        {
            variant === "stock" ? <span className={`${variant}-badge`}><div className="stock-badge-icon"></div>{title}</span> :  <span className={`${variant}-badge`}>{title}</span>
        }
    </>
  )
}

export default Badge