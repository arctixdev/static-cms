import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';

import classNames from '@staticcms/core/lib/util/classNames.util';
import { isNotNullish } from '@staticcms/core/lib/util/null.util';
import { selectIsFetching } from '@staticcms/core/reducers/selectors/globalUI';
import { useAppSelector } from '@staticcms/core/store/hooks';
import Table from '../../common/table/Table';
import entriesClasses from './Entries.classes';
import EntryRow from './EntryRow';

import type { CollectionEntryData } from '@staticcms/core/interface';
import type { FC } from 'react';
import type { t } from 'react-polyglot';

export interface EntryListingTableProps {
  isSingleCollectionInList: boolean;
  entryData: CollectionEntryData[];
  summaryFields: {
    name: string;
    label: string;
  }[];
  canLoadMore: boolean;
  isLoadingEntries: boolean;
  loadNext: () => void;
  t: t;
}

const EntryListingTable: FC<EntryListingTableProps> = ({
  isSingleCollectionInList,
  entryData,
  summaryFields,
  canLoadMore,
  isLoadingEntries,
  loadNext,
  t,
}) => {
  const isFetching = useAppSelector(selectIsFetching);

  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  const { virtualItems: virtualRows, totalSize } = useVirtual({
    parentRef: tableContainerRef,
    size: entryData.length,
    overscan: 10,
  });

  const paddingTop = useMemo(
    () => (virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0),
    [virtualRows],
  );
  const paddingBottom = useMemo(
    () =>
      virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0,
    [totalSize, virtualRows],
  );

  const fetchMoreOnBottomReached = useCallback(
    (scrollHeight?: number, scrollTop?: number, clientHeight?: number) => {
      if (isNotNullish(scrollHeight) && isNotNullish(scrollTop) && isNotNullish(clientHeight)) {
        //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
        if (scrollHeight - scrollTop - clientHeight < 300 && !isFetching && canLoadMore) {
          loadNext();
        }
      }
    },
    [isFetching, canLoadMore, loadNext],
  );

  const { scrollHeight, scrollTop, clientHeight } = tableContainerRef.current ?? {};

  useEffect(() => {
    fetchMoreOnBottomReached(scrollHeight, scrollTop, clientHeight);
  }, [clientHeight, fetchMoreOnBottomReached, scrollHeight, scrollTop]);

  const baseColumnHeaders = useMemo(() => {
    const cols = [...summaryFields.map(f => f.label), ''];

    if (!isSingleCollectionInList) {
      cols.unshift(t('collection.table.collection'));
    }

    return cols;
  }, [isSingleCollectionInList, summaryFields, t]);

  const columnFields = useMemo(() => [...summaryFields.map(f => f.name)], [summaryFields]);

  return (
    <div className={entriesClasses['entry-listing-table']}>
      <div
        ref={tableContainerRef}
        className={classNames(
          entriesClasses['entry-listing-table-content'],
          'CMS_Scrollbar_root',
          'CMS_Scrollbar_secondary',
        )}
      >
        <Table columns={baseColumnHeaders}>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map(virtualRow => {
            const data = entryData[virtualRow.index];
            return (
              <EntryRow
                key={virtualRow.index}
                collection={data.collection}
                collectionLabel={data.collectionLabel}
                entry={data.entry}
                columnFields={columnFields}
                t={t}
              />
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </Table>
      </div>
      {isLoadingEntries ? (
        <div key="loading" className={entriesClasses['entry-listing-loading']}>
          {t('collection.entries.loadingEntries')}
        </div>
      ) : null}
    </div>
  );
};

export default EntryListingTable;
