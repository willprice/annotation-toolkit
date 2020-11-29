import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const AxisContainer = styled.div`
    background: red;
    
    svg {
       width: 100%;
    }
`

const D3Axis = () => {
    const axisEl = useRef<SVGSVGElement | null>(null)

    const maxTime = 800;
    const pad = 20;


    const renderAxis = (width: number) => {
        d3.select(axisEl.current).attr("width", width)

        const scale = d3.scaleLinear().domain([0, maxTime]).range([0, width - pad*2])
        const axis = d3.axisBottom(scale)

        if (axisEl.current) {
            d3.select<SVGSVGElement, any>(axisEl.current)
                .select<SVGGElement>("g")
                .attr("transform", `translate(${pad}, 0)`)
                .call(axis)
        }
    }
    useEffect(() => {
        console.log(axisEl.current?.width)
        if (axisEl.current != null) {
            renderAxis(Number(axisEl.current.width))
        }
        const resizeListener = (e: any) => {
            renderAxis(Number(axisEl.current?.width))
        }
        window.addEventListener("resize", resizeListener)

        return () => {
            window.removeEventListener("resize", resizeListener)
        }
    }, [])

    return (
        <AxisContainer><svg ref={axisEl}><g></g></svg></AxisContainer>
    )
}

export default D3Axis;