import React from "react"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import Wrapper from "../assets/wrappers/PageBtnContainer"
import { useSelector, useDispatch } from "react-redux"
import { changePage } from "../features/allJobs/allJobsSlice"

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  const nextPage = () => {
    dispatch(changePage(page + 1))
  }
  const prevPage = () => {
    if(page <= 1) return
    dispatch(changePage(page - 1))
  }

  console.log(page)
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      {pages.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            type="button"
            className={pageNumber === page ? "pageBtn active" : "pageBtn"}
            onClick={() => console.log("change page ", pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      <button className="next-btn" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
