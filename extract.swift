import Foundation
import PDFKit

let path = "/Users/danielcseto/Desktop/BME/Anal2/anal 2 mérnökinfo feladatsorok_elm.pdf"
let url = URL(fileURLWithPath: path)
if let pdf = PDFDocument(url: url) {
    if let page = pdf.page(at: 24) {
        if let text = page.string {
            print(text)
        }
    } else {
        print("Page 24 out of bounds")
    }
} else {
    print("Could not open PDF")
}
