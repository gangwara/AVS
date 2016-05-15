/**
 * Copyright 2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * You may not use this file except in compliance with the License. A copy of the License is located the "LICENSE.txt"
 * file accompanying this source. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

package com.amazon.alexa.avs.message;

import java.util.UUID;

public class MessageIdHeader extends Header {
    private String messageId;

    public MessageIdHeader() {
        // For Jackson
    }

    public MessageIdHeader(String namespace, String name) {
        super(namespace, name);
        this.messageId = UUID.randomUUID().toString();
    }

    public final void setMessageId(String messageId) {
        this.messageId = messageId;
    }

    public final String getMessageId() {
        return messageId;
    }

    @Override
    public String toString() {
        return String.format("%1$s id:%2$s", super.toString(), messageId);
    }
}
