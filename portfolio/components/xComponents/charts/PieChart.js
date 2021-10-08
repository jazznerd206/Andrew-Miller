import React, { useState, useEffect } from 'react'
import { PieChart as Pie, PieArcSeries } from 'reaviz';

function PieChart({height, width, data}) {

    return (
      <Pie
        width={width}
        height={height}
        data={data}
        series={<PieArcSeries explode={true} />}
      />
    )
}

export default PieChart
