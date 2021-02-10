import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import Img from "gatsby-image"
import Page from './Page'
import PageCover from './PageCover'


const Book = ({ data }) => {
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [flipBook, setFlipBook] = useState(null)

    const onChangeOrientation = (e) => {
        console.log(e)
    }

    useEffect(() => {
        if (flipBook)
            setTotalPage(flipBook.getPageFlip().getPageCount())
    }, [flipBook]);


    return (
        <div className="book-container">
            <HTMLFlipBook
                width={685}
                height={960}
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
                className="caosen-catalog"
                ref={(el) => setFlipBook(el)}
            >
                {/* <Page>
                    <div style={{display: 'block', height: '98vh', background: '#fff'}} />
                </Page> */}
                {data.pages.edges.map((node, idx) =>
                    <Page>
                        <Img 
                            alt={`page${1 + idx}`} 
                            style={{ height: "100%", width: "100%" }}
                            imgStyle={{ objectFit: "contain" }}
                            fluid={node.node.childImageSharp.fluid} />
                    </Page>)}

            </HTMLFlipBook>

        </div>
    );
}

export default Book;
