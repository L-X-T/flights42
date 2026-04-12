import { Component, inject } from '@angular/core';

import { TabRegistry } from './tab-registry';

@Component({
  selector: 'app-tabbed-pane',
  providers: [TabRegistry],
  imports: [],
  template: `
    <div class="pane">
      <div class="tabs-header" role="group">
        @for (tab of tabs(); track tab) {
          <button
            class="tab-button"
            [class.active]="tab === currentTab()"
            (click)="activate($index)">
            {{ tab.title() }}
          </button>
        }
      </div>
      <div class="tabs-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
    .pane {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      background: var(--color-white);
      border-radius: 12px;
      border: 0.5px solid rgba(0, 0, 0, 0.08);
      overflow: hidden;
      margin-bottom: 24px;
    }

    .tabs-header {
      display: flex;
      border-bottom: 1px solid var(--color-border);
    }

    .tab-button {
      flex: 1;
      padding: 12px 20px;
      border: none;
      border-radius: 0;
      background: transparent;
      color: var(--color-label);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight);
      cursor: pointer;
      text-align: center;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
    }

    .tab-button:hover {
      color: var(--color-primary);
    }

    .tab-button.active {
      color: var(--color-primary);
      font-weight: var(--font-weight-bold);
      border-bottom: 2px solid var(--color-primary);
      border-radius: 0;
    }

    .tabs-content {
      padding: 24px;
      background: var(--color-white);
    }
  `,
})
export class TabbedPane {
  protected readonly registry = inject(TabRegistry);
  protected readonly tabs = this.registry.tabs;
  protected readonly currentTab = this.registry.currentTab;

  activate(tabIndex: number): void {
    this.registry.activate(tabIndex);
  }
}
