import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pageable, Sort, FilterCondition } from '@cpcardio/shared/services/data/datasource';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  readonly serverLocation = environment.serverLocation || `${location.origin}/api`;
  private paginationSearchQueryGenerator = new PaginationSearchQueryGenerator();

  constructor() {}

  fullUrl(endpoint: string): string {
    return `${this.serverLocation}/${endpoint}`;
  }

  fullPaginationUrl(endpoint: string, pageable: Pageable): string {
    const url = `${this.fullUrl(endpoint)}?${this.paginationSearchQueryGenerator.generatePaginationQuery(pageable)}`;
    return url;
  }
}

export class PaginationSearchQueryGenerator {

  constructor() { }

  public generatePaginationQuery(pageable: Pageable): string {
    const params: string[] = [];

    if (pageable.page !== undefined && pageable.page !== null) {
      params.push('page=' + pageable.page);
    } else if (pageable.page === undefined) {
      params.push('page=0' + pageable.page);
    }

    if (pageable.size) {
      params.push('size=' + pageable.size);
    }

    if (pageable.sort) {
      const sortParams: string[] = [];
      pageable.sort.map((property) => {
        if (!this.isValidSort(property)) {
          return;
        }

        const propertyPath = property.column.replace(/\./g, '-');
        sortParams.push(propertyPath.trim() + ':' + property.direction);
      });

      if (sortParams.length > 0) {
        params.push('sort=' + sortParams.join(','));
      }
    }

    if (pageable.filter) {
      const filterParams: string[] = [];
      pageable.filter.map((condition) => {
        if (!this.isValidCondition(condition)) {
          return;
        }

        const conditionPath = condition.filterBy.replace(/\./g, '-');
        filterParams.push(conditionPath.trim() + '|' + condition.value);
      });

      if (filterParams.length > 0) {
        params.push('filter=' + filterParams.join(','));
      }
    }

    return encodeURI(params.join('&'));
  }

  private isValidSort(sort: Sort) {
    const isDirectionSet = sort.direction === 'asc' || sort.direction === 'desc';
    return sort && sort.column && sort.column.trim() && isDirectionSet;
  }

  private isValidCondition(condition: FilterCondition) {
    return condition && condition.filterBy && condition.filterBy.trim() && condition.value != null && condition.value != undefined;
  }
}
