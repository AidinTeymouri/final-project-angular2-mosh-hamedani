import {
    Component, EventEmitter, Input, OnChanges, Output
} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

    @Input() itemsCount;
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();

    pages: any[];
    currentPage;

    ngOnChanges() {
        this.currentPage = 1;
        const pagesCount = Math.ceil(this.itemsCount / this.pageSize);
        this.pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    }

    previous() {
        if (this.currentPage === 1) {
            return;
        }

        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    next() {
        if (this.currentPage === this.pages.length) {
            return;
        }

        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }

}
