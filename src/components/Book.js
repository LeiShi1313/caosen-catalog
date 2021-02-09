import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import Img from "gatsby-image"
import Page from './Page'
import PageCover from './PageCover'


const Book = ({ data }) => {
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [flipBook, setFlipBook] = useState(null)
    console.log(data)

    const onChangeOrientation = (e) => {
        console.log(e)
    }

    useEffect(() => {
        if (flipBook)
            setTotalPage(flipBook.getPageFlip().getPageCount())
    }, [flipBook]);


    return (
        <div>
            <HTMLFlipBook
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => setPage(e.data)}
                onChangeOrientation={onChangeOrientation}
                // onChangeState={this.onChangeState}
                className="demo-book"
                ref={(el) => setFlipBook(el)}
            >

                {data.pages.edges.map((node, idx) =>
                    <Page>
                        <Img alt={`page${1 + idx}`} fluid={node.node.childImageSharp.fluid} />
                    </Page>)}

            </HTMLFlipBook>

            {/* <div className="container">
                <div>

                    <button type="button" onClick={prevButtonClick}>
                        Previous page
              </button>

              [<span>{page}</span> of
               <span>{totalPage}</span>]

              <button type="button" onClick={nextButtonClick}>
                        Next page
              </button>

                </div>
            </div> */}
        </div>
    );
}

export default Book;
